import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Select, Button, Modal } from 'antd';
import images from './assets';
import imgDoctor from './assets/images/doctor.png'
import { FaRegClock, FaShareFromSquare } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { IoBanOutline } from "react-icons/io5";
import time_data from './assets/json/time_data.json'
import ModalDetails from './components/ModalDetail'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
console.log('isModalOpen', isModalOpen)
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const doctors = [
    {
      value: '1',
      label: 'คุณหมอสมมุติ ทดสอบ',
    },
    {
      value: '2',
      label: 'คุณหมอทดสอบ นามสมมุติ',
    }
  ]
  return (
    <div className='flex flex-1 flex-col lg:flex-row md:flex-row m-2 h-90-screen'>
      <>

        <ModalDetails
          isModalOpen={isModalOpen}
          onClose={handleCancel}
        />
      </>
      <div className='flex flex-col flex-1 w-full md:w-4/5 lg:w-full pt-5'>
        <Select
          showSearch
          value={doctors[1]}
          className='w-full font-Sarabun'
          placeholder="ค้นหาและเลือกคุณหมอ"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={doctors}
        />
        <button className='bg-blue2 p-2 mt-2 rounded-md flex flex-row items-center justify-between'>
          <label className='text-xl font-Sarabun text-white'>ทันตแพทย์</label>
          <img src={imgDoctor} className='w-10 h-10 bg-slate-50 rounded-full p-1' />
        </button>
        <div className='flex flex-row  p-2 bg-mainColor justify-center items-center rounded-md'>
          <FaRegClock color='white' size={20} className='mx-2' />
          <small className='text-white'>เวลาเข้างาน 09:00 -19:00 น.</small>
        </div>
        <div className='bg-white h-50-screen lg:h-full overflow-y-auto'>

          {time_data.map((item, index) => (
            <div className='flex flex-row'>
              {item.time != '11:00' && item.time != '11:15' ?
                <>
                  <div className='p-3' style={{ backgroundColor: item.background, fontWeight: item.isTopOfHour ? 'bold' : 'normal' }}>
                    <label className='text-sm'>{item.time}</label>
                  </div>
                  <div className='p-2 w-full mx-3' style={{ backgroundColor: item.background, }}>

                  </div>
                </>
                :
                <>
                  <div className='p-3' style={{ backgroundColor: item.background }}>
                    <label className='text-sm'>{item.time}</label>
                  </div>
                  <div onClick={showModal} className='p-2 w-full mx-3' style={{ backgroundColor: '#fe9902' }}>

                    {item.time == '11:00' &&
                      <div>
                        <label className='text-xs'>ภัทราพร ชัยเพชร์ | </label>
                        <label className='text-xs'>ครอบฟันหรือสะพานฟัน | </label>
                        <label className='text-xs'>64010020924835486 | </label>
                        <label className='text-xs'>11:00 - 11:30 น.</label>
                      </div>
                    }
                  </div>


                </>

              }

            </div>
          ))}



        </div>
      </div>
      <div className='flex flex-col md:w-3/5 lg:w-3/5 md:ml-4 lg:ml-8 md:overflow-y-auto '>
        <div className='flex flex-row  p-2 items-center justify-between'>
          <div className='flex w-1/2'>
            <label className='text-lg lg:text-2xl lg:font-bold'>วันที่ 30 ม.ค. 2567</label>
          </div>
          <div className='flex '>
            <div className=' bg-sky p-2 justify-center items-center mx-3'>
              <label className='text-orange-400 px-2 lg:px-2 text-xs md:text-sm lg:text-md'>รายได้ทั้งหมด 0.00 บาท</label>

            </div>
            <Button color="danger" variant="outlined" size='large'>
              <TbReload color='red' size={20} />
            </Button>
          </div>

        </div>
        <div class="grid  grid-cols-1  md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
          <div className='bg-sky shadow-md rounded-md h-50-screen lg:h-full'>
            <div className='flex bg-darkMain p-3 justify-center items-center rounded-ss-md rounded-tr-md'>
              <small className='text-white text-center'>
                ห้องพิเศษ present ( 0 )
              </small>
            </div>

          </div>
          <div className='bg-sky shadow-md rounded-md h-50-screen lg:h-full'>
            <div className='flex bg-darkMain p-3 justify-center items-center rounded-ss-md rounded-tr-md'>
              <small className='text-white text-center'>
                แอดมิด ( 1 )
              </small>
            </div>
            <div className='flex flex-row bg-white mt-3 rounded-md shadow-md mx-5'>
              <div className='flex flex-col w-2/12 h-20 '>
                <div className='flex justify-center bg-darkMain w-full rounded-br-3xl rounded-tl-md'>
                  <label className='px-2 py-1 text-xs text-white'>01</label>
                </div>
                <FaUser color='#d8e8f5' size={35} className='rounded-full mt-1' />
              </div>
              <div className='flex flex-col w-7/12 flex-1 justify-between'>
                <div className='flex flex-col'>
                  <label className='text-sm font-semibold'>วรภัทร  บารมี</label>
                  <label className='text-xs'>6401023</label>
                </div>
                <div className='flex justify-center'>
                  <label className='text-xs text-gray-400'>9 วัน</label>
                </div>
              </div>
              <div className='flex flex-col w-2/12 m-1 items-end'>
                <div className='flex bg-blue2 w-5 h-1/3 justify-center rounded-tr-md'>
                  <label className='p-1 text-white text-xs'>05</label>
                </div>
                <div className='flex h-2/3 justify-center items-center'>
                  <IoBanOutline size={18} color='red' />
                </div>
              </div>

            </div>
          </div>
          <div className='bg-sorfGreen shadow-md rounded-md h-50-screen lg:h-full'>
            <div className='flex bg-darkMain p-3 justify-center items-center rounded-ss-md rounded-tr-md'>
              <small className='text-white text-center'>
                จุดชำระเงิน ( 1 )
              </small>
            </div>
            <div className='flex flex-row bg-white mt-3 rounded-md shadow-md mx-5'>
              <div className='flex flex-col w-2/12 h-20 '>
                <div className='flex justify-center bg-darkMain w-full rounded-br-3xl rounded-tl-md'>
                  <label className='px-2 py-1 text-xs text-white'>01</label>
                </div>
                <FaUser color='#d8e8f5' size={35} className='rounded-full mt-1' />
              </div>
              <div className='flex flex-col w-7/12 flex-1 justify-between'>
                <div className='flex flex-col'>
                  <label className='text-sm font-semibold'>การดา  สุขสวัสดิ์</label>
                  <label className='text-xs'>6401009</label>
                </div>
                <div className='flex justify-center'>
                  <label className='text-xs text-gray-400'>5 วัน</label>
                </div>
              </div>

              <div className='flex flex-col w-2/12 m-1 items-end'>

                <div className='flex bg-blue2 w-5 h-1/3 justify-center rounded-tr-md'>
                  <label className='p-1 text-white text-xs'>03</label>
                </div>
                <div className='flex flex-row h-2/3 justify-center items-center'>
                  <FaShareFromSquare className='mx-1' color='#d8e8f5' />

                  <IoBanOutline size={18} color='red' />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
