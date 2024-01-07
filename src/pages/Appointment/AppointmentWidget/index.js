import { Button, Row, Col } from "react-bootstrap";
import DatePicker from "../../Advisors/components/DatePicker/index";
import useAuth from "hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import moment from "moment";

const AppointmentWidget = ({
  selectedDate,
  onChangeDate,
  minDate,
  maxDate,
  slots = [],
  onChangeSlot,
  selectedSlot,
  advisorId,
  appointment = [],
}) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const onClickBook = () => {
    const selectedSlotTime = selectedSlot.time;
    const selectedTimeObject = moment(selectedSlotTime, 'hh:mm A');
    const bookingDate = selectedDate.set({
      hour: selectedTimeObject.hour(),
      minute:selectedTimeObject.minute(),
      seconds: 0,
    });
    navigate(`/appoinments/new?date=${bookingDate}&advisorId=${advisorId}`);
  };
  const appoinmentMap = useMemo(() => {
    return appointment.reduce((map, appointment) => {
      const localTime = moment(appointment.time).toLocaleString();

      map[moment(localTime).format("h-mm-a")] = appointment;
      return map;
    }, {});
  }, [appointment]);

  
  const isSlotSelected = (time) => {
    const formattedTime = moment(time, "h-mm-a").format("h-mm-a")
    return !!appoinmentMap[formattedTime]
}  


  const getVariant = (isBooked, slot) => {
    if (isBooked) return "danger"
    if (selectedSlot?._id === slot._id) return "success"
    return "outline-primary"
  }
  
  return (
    <div>
      <div className="mb-4">
        <span className="me-2">Date: </span>
     
      <DatePicker
        selectedDate={selectedDate}
        onChange={onChangeDate}
        minDate={minDate}
        maxDate={maxDate}
      />
       </div>
      <Row>
        {slots.map((slot) =>
        {
          const isBooked = isSlotSelected(slot.time)
          return (
            <Col md={4}>
               <div className="d-grid gap-1 mb-2">
              <Button
                xs
                fluid
               disabled={isBooked}
                variant={getVariant(isBooked, slot)}
                onClick={() => onChangeSlot(slot)}
              >
                {slot.time}
              </Button>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row>
        {isLoggedIn ? (
          <Button onClick={onClickBook} className="mt-1">Book</Button>
        ) : (
          <Button as={Link} to={"/signin"}> Login to book</Button>
        )}
      </Row>
    </div>
  );
};

export default AppointmentWidget;
