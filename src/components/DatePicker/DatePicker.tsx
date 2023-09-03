import { useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { resetImages } from '../../store/ImagesSlice';
import fetchImages from '../../api/imagesApi';
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function DatePicker() {
  const [date, setDate] = useState<Value>(new Date());

  const dispatch = useDispatch();

  const onDateChange = async (newDate: Value) => {
    setDate(newDate);
    fetchImages().then(result => {
      dispatch(resetImages(result));
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='calenderContainer'>
      <Calendar
        className='react-calendar'
        calendarType="hebrew"
        onChange={onDateChange}
        value={date} />
    </div>
  );
}

export default DatePicker;