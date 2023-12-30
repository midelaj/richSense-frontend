import { useEffect, useState } from "react";
import AppointmentWidget from "../AppointmentWidget";

import moment from "moment";
import { fetchSlotAPI } from "../api";
import { fetchAdvisorAppointmentAPI } from "pages/Advisors/api";

const Appointment = ({ advisorId }) => {
  const [selectedDate, setSelectDate] = useState(moment());
  const [selectedSlot, setSelectedSlot] = useState();
  const [slots, setSlots] = useState([]);
  const [appointment, setAppointment] = useState();
  const onchangeSelectedDate = (updatedDate) => {
    setSelectDate(moment(updatedDate));
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [selectedDate]);

  const fetchSlots = async () => {
    const data = await fetchSlotAPI(advisorId);
    setSlots(data);
  };
  const onChangeSlot = (slot) => {
    setSelectedSlot(slot);
  };

  const fetchAppointments = async () => {
    const formattedDate = selectedDate.unix();
    const response = await fetchAdvisorAppointmentAPI(advisorId, {
      date: formattedDate,
    });
    setAppointment(response.data);
  };

  return (
    <AppointmentWidget
      selectedDate={selectedDate}
      onChangeDate={onchangeSelectedDate}
      minDate={moment().toDate()}
      maxDate={moment().add(10, "days").toDate()}
      slots={slots}
      onChangeSlot={onChangeSlot}
      selectedSlot={selectedSlot}
      advisorId={advisorId}
      appointment={appointment}
    />
  );
};

export default Appointment;
