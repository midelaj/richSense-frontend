import { useQueryParams } from "hooks/usepQueryParam";
import { fetchAdvisorAPI } from "pages/Advisors/api";
import { useEffect, useState } from "react";
import Payment from "./Payment";
import { AppointmentCreate, fetchConfirmAppointmentAPI } from "./api";
import moment from "moment";

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
    } catch (error) { }
    finally {
      setLoader(false)
    }
  };

  const createAppointment = async () => {
    const originalDate = moment(date, "ddd MMM DD YYYY HH:mm:ss [GMT] zz");
    const utcDate = originalDate.utc();
    debugger
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
      const confirmAppointment = await fetchConfirmAppointmentAPI(appointment._id)
    } catch (error) {
      setLoader(false)
    }
   
  }

  const onPaymentSuccess = () => {

    confirmAppointments()
   };
  
  if (loader) {
    return "loading"
  }

  console.log({ advisor });
  return (
    <div>
      <p>Advisor:{advisor.name}</p>
      <p>date:{date}</p>
      <Payment
        onClickPay={createAppointment}
        onPaymentSuccess={onPaymentSuccess}
      />
    </div>
  );
};

export default Appointments;
