// import React, { useState } from "react";
// import { Button, Modal } from "antd";
// import { ExclamationCircleOutlined } from "@ant-design/icons";

// const ModalComp = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//     console.log("OK button clicked");
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//     console.log("cancel button clicked");
//   };

//   const [open, setOpen] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [modalText, setModalText] = useState("Content of the modal");
//   const showModal2 = () => {
//     setOpen(true);
//   };

//   const handleOk2 = () => {
//     setModalText("The modal will be closed after two seconds");
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setOpen(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };
//   const handleCancel2 = () => {
//     console.log("Clicked cancel button");
//     setOpen(false);
//   };

//   const info = () => {
//     Modal.info({
//       title: "This is a notification message",
//       content: (
//         <div>
//           <p>some messages...some messages...</p>
//           <p>some messages...some messages...</p>
//         </div>
//       ),
//       onOk() {},
//     });
//   };

//   const success = () => {
//     Modal.success({
//       content: "some messages...some messages...",
//     });
//   };
//   const error = () => {
//     Modal.error({
//       title: "This is an error message",
//       content: "some messages...some messages...",
//     });
//   };
//   const warning = () => {
//     Modal.warning({
//       title: "This is a warning message",
//       content: "some messages...some messages...",
//     });
//   };

// //   auto closing modal<
// const countDown = () => {
//     let secondsToGo = 5;
//     const modal = Modal.success({
//       title: 'This is a notification message',
//       content: `This modal will be destroyed after ${secondsToGo} second.`,
//     });
//     const timer = setInterval(() => {
//       secondsToGo -= 1;
//       modal.update({
//         content: `This modal will be destroyed after ${secondsToGo} second.`,
//       });
//     }, 1000);
//     setTimeout(() => {
//       clearInterval(timer);
//       modal.destroy();
//     }, secondsToGo * 1000);
//   };
//   const confirm = () => {
//     Modal.confirm({
//       title: 'Confirm',

//       icon: <ExclamationCircleOutlined />,
//       content: 'Bla bla ...',
//       okText: 'Okay',
//       cancelText: 'cancel',
//       onOk() {
//         console.log("confirm ok")
//       },
//       onCancel() {
//         console.log("confirm cancel")
//       },
//     });
//   };

//   return (
//       <div>
//           <h2 style={{ color: "red" }}>confirm modal</h2>

//           <Button onClick={confirm}>CONFIRM MODAL</Button>
//           <br /><br />
//           <h2 style={{ color: "red" }}>auto closing modal</h2>

//           <Button onClick={countDown}>Open modal to close in 5s</Button>

//           <br /><br />

//       <h2 style={{ color: "red" }}>different modal</h2>
//       <Button onClick={info}>Info</Button>
//       <Button onClick={success}>Success</Button>
//       <Button onClick={error}>Error</Button>
//       <Button onClick={warning}>Warning</Button>
//         <br />
//         <br />
//       <h2 style={{ color: "red" }}>Async modal</h2>
//       <Button type="primary" onClick={showModal2}>
//         Open Modal with async logic
//       </Button>
//       <Modal
//         title="Title"
//         style={{ top: 20 }}
//         centered
//         open={open}
//         onOk={handleOk2}
//         okButtonProps={{
//             disabled: true,
//           }}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel2}
//       >
//         <p>{modalText}</p>
//       </Modal>
//       <br />
//       <br />
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal
//         type={"success"}
//         title="Basic Modal"
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </div>
//   );
// };

// export default ModalComp;

import React, { useState } from "react";
import { Button, Modal } from 'antd';

const ModalComp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <br />
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
      closable={true}
      centered
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // okButtonProps={{
        //     disabled: true,
        //   }}
          cancelButtonProps={{
            disabled: true,
          }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default ModalComp;
