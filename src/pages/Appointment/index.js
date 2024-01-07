import { useQueryParams } from "hooks/usepQueryParam";
import { fetchAdvisorAPI } from "pages/Advisors/api";
import { useEffect, useState } from "react";
import Payment from "./Payment";
import { AppointmentCreate, fetchConfirmAppointmentAPI } from "./api";
import moment from "moment";

import Title from "components/Title";

const Appointments = () => {
  const { date, advisorId } = useQueryParams();
  const [advisor, setAdvisor] = useState();
  const [loader, setLoader] = useState(true);
  const [appointment, setAppointment] = useState();

  useEffect(() => {
    fetchAdvisor();
  }, []);

  const fetchAdvisor = async () => {
    try {
      setLoader(true);
      const advisorData = await fetchAdvisorAPI(advisorId);
      setAdvisor(advisorData);
    } catch (error) {
    } finally {
      setLoader(false);
    }
  };

  const createAppointment = async () => {
    const originalDate = moment(date, "ddd MMM DD YYYY HH:mm:ss [GMT] zz");
    const utcDate = originalDate.utc();
    debugger;
    const response = await AppointmentCreate({
      advisorId: advisorId,
      time: utcDate.format(),
    });
    setAppointment(response);
    return response.data.order;
  };

  const confirmAppointments = async () => {
    try {
      setLoader(true);
      const confirmAppointment = await fetchConfirmAppointmentAPI(
        appointment._id
      );
    } catch (error) {
      setLoader(false);
    }
  };

  const onPaymentSuccess = () => {
    confirmAppointments();
  };

  if (loader) {
    return "loading";
  }
  return (
    <div>
      <Title content="Complete the booking" />
      <div className="dashboard-content">
        <div className="container">
          <div className="bookmarks-content grid-view featured-slider">
            <div className="row">
              <p className="mb-2">Advisor: {advisor.name}</p>
              <p>Date: {date}</p>
              <p>Amount: 500</p>
              <Payment
                onClickPay={createAppointment}
                onPaymentSuccess={onPaymentSuccess}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
