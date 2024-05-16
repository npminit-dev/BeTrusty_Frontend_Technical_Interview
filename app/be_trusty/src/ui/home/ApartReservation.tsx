'use client'

import { useEffect, useRef, useState } from "react";
import { ApartReserveProps } from "../../../typedefs/home"
import { roboto } from "../fonts"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import { calendarStyles } from "@/mui_styles";

export default function ApartReservation({ pricePerNight }: ApartReserveProps) {

  const tableRef = useRef<HTMLTableElement | null>(null)
  const [days, setdays] = useState<number>(0);
  const [startdate, setstartdate] = useState<Dayjs | null>()
  const [enddate, setenddate] = useState<Dayjs | null>()
  const [iscalendaropen, setiscalendaropen] = useState<boolean>(false);

  useEffect(() => {
    if (startdate && enddate) {
      let daysdiff = enddate?.diff(startdate, 'days')
      if (daysdiff !== undefined) {
        if (daysdiff >= 0) setdays(daysdiff)
        else {
          setenddate(startdate)
          setdays(0)
        }
      }
    }
  }, [enddate, startdate]);

  const handleEndDateChange = (p: any, view: ('day'|'month'|'year')|undefined) => {
    setenddate(dayjs(p.$d))
    if (startdate) {
      if (view === 'day') {
        setiscalendaropen(false)
        tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <span className="md:col-start-2 md:col-end-3 md:place-self-end md:self-start">
      <table ref={tableRef} style={roboto.style} cellPadding={15} className="w-[320px] relative mt-8 mb-6 p-0 text-white border-separate border-[1px] border-gray-400 rounded-xl z-10">
        <tbody>
          <tr>
            <td colSpan={2} className="border-b-[1px] border-gray-400">
              <div className="text-[24px] text-center align-middle">
                <strong>${pricePerNight} USD por noche</strong>
              </div>
              <div className="text-[16px] text-center align-middle">Precio por habitacion</div>
            </td>
          </tr>
          <tr>
            <td className="cursor-pointer hover:bg-black duration-200" onClick={() => setiscalendaropen(!iscalendaropen)}>
              <div className="font-medium text-[16px] text-center align-middle">CHECK-IN</div>
              <div className="text-[16px] text-center align-middle">{startdate?.format('DD/MM/YYYY') || 'dd/mm/aaaa'}</div>
            </td>
            <td className="border-l-[1px] border-gray-400">
              <div className="font-medium text-[16px] text-center align-middle">CHECK-OUT</div>
              <div className="text-[16px] text-center align-middle">{enddate?.format('DD/MM/YYYY') || 'dd/mm/aaaa'}</div>
            </td>
          </tr>
          <tr className={`w-full h-full ${!iscalendaropen ? 'close_calendar' : 'open_calendar'}`}>
            <td colSpan={2} className="border-t-[1px] border-gray-400 p-0">
              <button className="w-full mt-2 text-[13px] text-center align-middle font-normal hover:underline" onClick={() => setiscalendaropen(false)}>Cerrar calendario</button>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <span className="open_calendar">
                  <DateCalendar
                    sx={calendarStyles}
                    className="rounded-md" disablePast
                    onChange={(p) => setstartdate(dayjs(p.$d))} />
                  <DateCalendar
                    sx={calendarStyles}
                    className="rounded-md" disablePast
                    minDate={startdate || dayjs()}
                    onChange={(p, _, view) => handleEndDateChange(p, view)}
                  />
                </span>
              </LocalizationProvider>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="border-t-[1px] border-gray-400">
              <div className="font-medium text-[16px] text-center align-middle">
                Cantidad de dias: <strong>{days}</strong>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="border-t-[1px] border-gray-400">
              <div className="text-center align-middle">
                Depósito reembolsable: <strong>${pricePerNight} USD</strong>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="border-t-[1px] border-gray-400">
              <div className="text-center align-middle">
                Ingreso total: <strong>${days * pricePerNight} USD</strong>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button style={roboto.style} className="w-[320px] text-[16px] py-2 bg-[#33eaff] rounded-l-full rounded-r-full hover:bg-black hover:text-[#33eaff] duration-200">Invitar inquilino</button>
      {iscalendaropen && <div className="fixed h-[100vh] w-[100vw] top-0 left-0 bg-transparent z-0" onClick={() => setiscalendaropen(false)}></div>}
    </span>
  )
}


