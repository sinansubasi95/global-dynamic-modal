import Header from "@/components/Header";
import { useModalContext } from "@/contexts/ModalContext";

const Parent2 = () => {
    const modal = useModalContext();
    const modal2 = useModalContext();

    function ModalExample() {
        return (
            <div className="modals-wrapper">
                <div className="modal">
                    {Math.floor(Math.random() * 100)}
                    <input type="text"/>
                </div>
            </div>
        );
    }

    const openModal = () => modal.open(<ModalExample/>);
    const openModal2 = () => modal2.open();
    const closeModal = () => modal.close();
    const closeModal2 = () => modal2.close();
    // const openModalx = () => modal(m => (
    //     <div className="toast">
    //         <div>
    //             username
    //             email
    //         </div>
    //         <div onClick={() => m.close(m.id)}>
    //             close
    //         </div>
    //         <div>
    //             save
    //         </div>
    //     </div>
    // ))
    
    
    return (
        <main>
            <Header/>
            <div>Parent2</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <button onClick={openModal}>open modal</button>
                <button onClick={closeModal}>close modal</button>
                <button onClick={openModal2}>open modal2</button>
                <button onClick={closeModal2}>close modal2</button>
            </div>
        </main>
    )
}

export default Parent2;