import Header from "@/components/Header";
import { useModalContext } from "@/contexts/ModalContext";
import { useExperimentContext } from "@/contexts/ExperimentContext";

const Parent2 = () => {
    const modal = useModalContext();
    const modal2 = useModalContext();
    const experiment = useExperimentContext();

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

    // modal.loading(<Component/>)
    

    // const openModalx = () => modal.custom(m => (
    //     <div className="toast">
    //         <div>
    //             username
    //             email
    //         </div>
    //         <div onClick={() => m.close(m.id)}>
    //             close
    //         </div>
    //         <div onClick={m.promise(saveSettings)}>
    //             save // save bittikten sonra kapat, save settings fonksiyonundan duruma göre toast dön
    //         </div>
    //     </div>
    // ))



    // fetch({
    //     method: "get",
    //     path: "..."
    // })
    // .then(() => {
    //     Modal.Open(<SuccessComponent onClose={Modal.Close()} onSave={saveUser} />)
    // })
    // .catch(() => {
    //     Modal.Open(<ErrorComponent onClose={Modal.Close()} />)
    // });

    // fetch({
    //     method: "get",
    //     path: "..."
    // })
    // .then((data) => {
    //     Modal.open(
    //         <ModalSuccessTemplate onClose={Modal.Close()} onSave={saveUser}>
    //             <div>
    //                 Body
    //             </div>
    //         </ModalSuccessTemplate>
    //     )
    // })
    // .catch((err) => {
    //     Modal.Open(
    //         <ModalErrorTemplate onClose={Modal.Close()}>
    //             <div>
    //                 Body
    //             </div>
    //         </ModalErrorTemplate>
    //     )
    // });


    // fetch({
    //     method: "get",
    //     path: "..."
    // })
    // .then((data) => {
    //     modal((m) => (
    //         <div>
    //             <div>
    //                 <input name="username" value={data.username} />
    //                 <input name="email" value={data.email} />
    //             </div>
    //             <div>
    //                 <button onClick={saveUser}>Save</button>
    //                 <button onClick={m.close(m.id)}>Close</button>
    //             </div>
    //         </div>
    //     ));
    // })
    // .catch((err) => console.log(err));

    // modal.promise(
    //     fetchUser(id),
    //     {
    //         loading: <LoadingComponent />,
    //         success: modal.open(() => {

    //         }),
    //         error: <b>Could not save.</b>,
    //     }
    // );
    

    
    // const openModalx = async () => modal(m => {
    //     m.promise(getsettings)
    //         .then((data) => {
    //             return (
    //                 <div className="toast">
    //                     <div>
    //                         data.username
    //                         data.email
    //                     </div>
    //                     <div onClick={() => m.close(m.id)}>
    //                         close
    //                     </div>
    //                     <div onClick={m.promise(saveSettings)}>
    //                         save // save bittikten sonra kapat, save settings fonksiyonundan duruma göre toast dön
    //                     </div>
    //                 </div>
    //             )
    //         })
    //         .catch((err) => {
    //             return (
    //                 <div>error</div>
    //             )
    //         })
    // })

    // modal()


    // modal -> start fetching
    // -> loading component -> data/error

    // const Modal = useModalContext();

    // Modal.promise(fetchUser(id), <LoadingComponent />);
    // Modal.show()


    // modal.promise(m => {
    //     fetch
    // })


    // modal(

    //     fetchSettings(settings),
    //     {
    //         loading: 'Loading...',
    //         success: <CustomModal />,
    //         error: <ErrorModal />,
    //     }
    // );

    // <div className="toast">
    //     <div>
    //         data.username
    //         data.email
    //     </div>
    //     <div onClick={() => m.close(m.id)}>
    //         close
    //     </div>
    //     <div onClick={m.promise(saveSettings)}>
    //         save // save bittikten sonra kapat, save settings fonksiyonundan duruma göre toast dön
    //     </div>
    // </div>

    

    // function User(name) {
    //     if (!new.target) { // if you run me without new
    //       return new User(name); // ...I will add new for you
    //     }
      
    //     this.name = name;
    // }

    const LoadingComponent = ({onClose}) => {
        return (
            <div className="modal">
                LOADING
                <button onClick={onClose}>Close</button>
            </div>
        )
    }

    function ModalSuccess ({onClose, onSave, data}) {
        return (
            <div className="modal">
                SUCCESS
                {JSON.stringify(data)}
                <button onClick={onClose}>Close</button>
                <button onClick={onSave}>Save</button>
            </div>
        )
    }

    function ModalError (onClose, error) {
        return (
            <div className="modal">
                ERROR
                {JSON.stringify(error)}
                <button onClick={onClose}>Close</button>
            </div>
        )
    }

    function fetchUser() {
        return fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then(function (todos) {
                return todos[0]
            });
    }

    function saveUser(data) {
        console.log(data)
    }

    // function runExperiment () {
    //     experiment.promise(fetchUser, <LoadingComponent />)
    //         .then((id, data) => {
    //             console.log(data)
    //             experiment.edit({
    //                 id: id,
    //                 component: <ModalSuccess onClose={experiment.close(id)} onSave={saveUser(data)} data={data} />
    //             })
    //         })
    //         .catch((id, error) => (<ModalError onClose={experiment.close(id)} error={error} />))
    // }


    // bu şekilde olsun. bir üstteki daha kötü
    // experiment.promise(
    //     fetchUser,
    //     {
    //       loading: 'Loading',
    //       success: (data) => `Successfully saved ${data.name}`,
    //       error: (err) => `This just happened: ${err.toString()}`,
    //     },
    // )

    // experiment.promise(fetchUser(id), <LoadingComponent />)
    //      .then((id, data) => (<ModalSuccess onClose={experiment.close(id)} onSave={saveUser(data)} data={data} />))
    //      .catch((id, error) => (<ModalError onClose={experiment.close(id)} error={error} />))

    
    // const Modal = useModal();
    // Modal.load((m) => fetchUser(id), <ModalLoading onClose={m.close} />)
    // Modal.


    return (
        <main>
            <Header/>
            <div>Parent2</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <button onClick={openModal}>open modal</button>
                <button onClick={closeModal}>close modal</button>
                <button onClick={openModal2}>open modal2</button>
                <button onClick={closeModal2}>close modal2</button>
                {/* <button onClick={() => {
                    // let john = User("John"); // redirects call to new User
                    // alert(john.name); // John
                    const test = experiment.Custom("sinan");
                    console.log(experiment.Custom("sinan"))
                    console.log(test)
                }}>write sinan</button> */}
                {/* <button onClick={() => console.log(test)}>read sinan</button> */}
                <button onClick={() => {
                    experiment.promise(
                        fetchUser,
                        {
                          loading: (id) => <LoadingComponent onClose={() => experiment.close(id)} />,
                          success: (id, data) => <ModalSuccess onClose={() => experiment.close(id)} onSave={() => saveUser(data)} data={data} />,
                          error: (err) => `This just happened: ${err.toString()}`,
                        },
                    )
                }}>experiment</button>
            </div>
        </main>
    )
}

export default Parent2;