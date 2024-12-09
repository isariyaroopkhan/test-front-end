import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import "./styles.css";
import { Modal, Card } from 'antd';
import imgDoctor from '../assets/images/doctor.png'
import { FaPrint, FaPen, FaUser,FaTooth,FaPhoneAlt,FaClock  } from "react-icons/fa";

const ModalDetail = ({ isModalOpen, onClose }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        // bgcolor: 'background.paper',
        // border: '1px solid #000',
        // boxShadow: 24,
        // p: 4,
    };

    return (
        <>
            {/* <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h5 className='heading'>Dialog</h5>
                    </div>
                    <button className='closeBtn' onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className='modalContent'>
                        Are you sure you want to delete the item?
                    </div>
                    <div className='modalActions'>
                        <div className='actionsContainer'>
                            <button className='deleteBtn' onClick={() => setIsOpen(false)}>
                                Delete
                            </button>
                            <button
                                className='cancelBtn'
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            <Modal
                open={isModalOpen}
                onCancel={onClose}
                footer={false}
                className='w-70-screen'>
                <div className='p-2'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <label className='text-darkMain text-sm'>นัดหมาย</label>
                            <label className='text-darkMain text-sm'>ทันตแพทย์ คุณหมอสมมุติ ทดสอบ</label>
                        </div>
                        <img src={imgDoctor} className='w-10 h-10 bg-slate-50 rounded-full p-1' />
                    </div>

                    <div className='flex flex-row'>
                        <div className='flex flex-col ml-6 w-2/3'>
                            <div className='flex flex-row mb-1'>
                                <FaUser size={13} color='#1cb99a' />
                                <label className='mx-1 text-xs'>6400004 | จรูณ ทดสอบ4</label>
                            </div>
                            <div className='flex flex-row  mb-1'>
                                <FaTooth size={13} color='#1cb99a' />
                                <label className='mx-1 text-xs'>บริการ รักษารากฟัน</label>
                            </div>
                            <div className='flex flex-row  mb-1'>
                                <FaPhoneAlt size={13} color='#1cb99a' />
                                <label className='mx-1 text-xs'>095-646-0428</label>
                            </div>
                            <div className='flex flex-row  mb-1'>
                                <label className='mx-1 text-xs'>ประเมินค่าใช้จ่าย 0.00</label>
                            </div>
                            <div className='flex flex-row  mb-1'>
                                <FaClock  size={13} color='#1cb99a' />
                                <label className='mx-1 text-xs'>18:00-18:30</label>
                            </div>
              
                        </div>
                        <div className='flex flex-row w-1/3 items-end justify-end'>
                            <FaPrint size={20} color='#1cb99a' className='mx-3' />
                            <FaPen size={20} color='#1cb99a' />
                        </div>
                    </div>
                </div>
                {/* <Card  style={{...style, width: 300,backgroundColor : 'green' }}> */}

                {/* </Card> */}
            </Modal>

        </>
    )
}

export default ModalDetail