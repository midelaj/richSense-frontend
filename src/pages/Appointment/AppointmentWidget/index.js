import { Button, Card, Row, Col } from "react-bootstrap";
import DatePicker from "../../Advisors/components/DatePicker/index";
import useAuth from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
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
    const selectedSlotTimeSplit = selectedSlotTime.split(":");
    const hour = selectedSlotTimeSplit[0];
    const minuteSplit = selectedSlotTimeSplit[1].split(" ");
    const minute = minuteSplit[0];
    const meridiem = minuteSplit[1];
    const bookingDate = selectedDate.set({
      hour,
      minute,
      seconds: 0,
      meridiem,
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
    <Card>
      <DatePicker
        selectedDate={selectedDate}
        onChange={onChangeDate}
        minDate={minDate}
        maxDate={maxDate}
      />
      <Row>
        {slots.map((slot) =>
        {
          const isBooked = isSlotSelected(slot.time)
          return (
            <Col md={4}>
              <Button
                xs
               disabled={isBooked}
                variant={getVariant(isBooked, slot)}
                onClick={() => onChangeSlot(slot)}
              >
                {slot.time}
              </Button>
            </Col>
          );
        })}
      </Row>
      <Row>
        {isLoggedIn ? (
          <Button onClick={onClickBook}>Book</Button>
        ) : (
          <Button> Login to book</Button>
        )}
      </Row>
    </Card>
  );
};

export default AppointmentWidget;
