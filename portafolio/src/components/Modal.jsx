

import { useState } from 'react';
import {RiMailSendLine} from 'react-icons/ri'
import {FaTimes} from 'react-icons/fa';

function Modal({handleModal, isModal}) {


    return (
        <div className={!isModal? "hidden" : "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"}>
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-end p-2">
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={handleModal}>
                            <FaTimes className='w-5 h-5'/>
                        </button>
                    </div>

                    <div className="p-6 pt-0 text-center">
                        <RiMailSendLine className='mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200'/>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Gracias por enviar su mensaje</h3>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;