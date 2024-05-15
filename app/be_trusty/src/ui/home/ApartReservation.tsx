'use client'

import { useEffect, useRef, useState } from "react";
import { ApartReserveProps } from "../../../typedefs/home"
import { roboto } from "../fonts"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import { calendarStyles } from "@/mui_styles";

export default function ApartReservation({ pricePerNight }: ApartReserveProps) {

  const tableRef = useRef<HTMLTableElement|null>(null)
  const [days, setdays] = useState<number>(0);
  const [startdate, setstartdate] = useState<Dayjs|null>()
  const [enddate, setenddate] = useState<Dayjs|null>()
  const [iscalendaropen, setiscalendaropen] = useState<boolean>(false);

  useEffect(() => {
    if(startdate && enddate) {
      let daysdiff = enddate?.diff(startdate, 'days')
      if(daysdiff !== undefined) {
        if(daysdiff >= 0) setdays(daysdiff)
        else {
          setenddate(startdate.add(1, 'day'))
          setdays(0)
        }
      }
    }
  }, [enddate, startdate]);

  useEffect(() => {
    if(iscalendaropen) 
      if(startdate) tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [iscalendaropen])

  return (
    <>
      <table ref={tableRef} style={roboto.style} cellPadding={15} className="w-[320px] relative mt-12 mb-6 p-0 text-white border-separate border-[1px] border-gray-400 rounded-xl z-10">
        <tbody>
          <tr className="w-full h-full">
            <td colSpan={2} className="border-b-[1px] border-gray-400">
              <div className="text-[24px] text-center align-middle">
                <strong>${pricePerNight} USD por noche</strong>
              </div>
              <div className="text-[16px] text-center align-middle">Precio por habitacion</div>
            </td>
          </tr>
          <tr className="w-full h-full">
            <td className="cursor-pointer hover:bg-black duration-200" onClick={() => setiscalendaropen(!iscalendaropen)}>
              <div className="font-medium text-[16px] text-center align-middle">CHECK-IN</div>
              <div className="text-[16px] text-center align-middle">{startdate?.format('DD/MM/YYYY') || 'dd/mm/aaaa'}</div>
            </td>
            <td className="border-l-[1px] border-gray-400">
              <div className="font-medium text-[16px] text-center align-middle">CHECK-OUT</div>
              <div className="text-[16px] text-center align-middle">{enddate?.format('DD/MM/YYYY') || 'dd/mm/aaaa'}</div>
            </td>
          </tr>
          {
            iscalendaropen && <>
              <tr className="w-full h-full">
                <td colSpan={2} className="border-t-[1px] border-gray-400 p-0">
                <button className="w-full text-[13px] text-center align-middle font-normal hover:underline" onClick={() => setiscalendaropen(false)}>Cerrar calendario</button>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <span className="open_calendar">
                      <DateCalendar 
                        sx={calendarStyles} 
                        className="rounded-md" disablePast 
                        value={startdate || dayjs()}
                        onChange={(p) => setstartdate(dayjs(p.$d))} />
                      <DateCalendar 
                        sx={calendarStyles}
                        className="rounded-md" disablePast 
                        value={enddate || dayjs().add(1, 'day')}
                        minDate={startdate?.add(1, 'day') || dayjs()} 
                        onChange={(p, _, view) => {
                          setenddate(dayjs(p.$d))
                          if(view === 'day') setiscalendaropen(false)
                        }}
                      />
                    </span>
                  </LocalizationProvider>
                </td>
              </tr>
            </>
          }
          <tr className="w-full h-full">
            <td colSpan={2} className="border-t-[1px] border-gray-400">
              <div className="font-medium text-[16px] text-center align-middle">
                Cantidad de dias: <strong>{days}</strong>
              </div>
            </td>
          </tr>
          <tr className="w-full h-full">
            <td colSpan={2} className="border-t-[1px] border-gray-400">
              <div className="text-center align-middle">
                Depósito reembolsable: <strong>${pricePerNight} USD</strong>
              </div>
            </td>
          </tr>
          <tr className="w-full h-full">
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
    </>
  )
}


