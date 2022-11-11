import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
import ModalWindow from './ModalWindow/ModalWindow'


function Container() {

 

    return (
        <div className="h-[100vh] w-[100%] flex flex-row items-center justify-center z-30">
            <Sidebar />
            <Content />
            <ModalWindow />
        </div>
    )
}

export default Container
