const clickHandler = function() {
    alert('click')
}

const B = (props) => {
    const si = (e) => {
        e.replaceWith(props.element)
    }
    return <div ref={si}>1324234</div>
}

window.template = function () {
    const a = document.createElement('div');
    a.className = "lala";
    a.innerHTML = '123sfhsdfsdjfhdsf14'
    return <div>
        <><div></div></>
        <B element={a}/>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="123" d="M10.125 10.9168V17.2502H11.7083V10.9168H10.125Z" fill="#D12B1F"/>
            <path d="M13.2917 17.2502V10.9168H14.875V17.2502H13.2917Z" fill="#D12B1F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.54167 4.5835H16.4583V7.75016H19.625V9.3335H18.8333V20.4168H6.16667V9.3335H5.375V7.75016H8.54167V4.5835ZM10.125 7.75016H14.875V6.16683H10.125V7.75016ZM7.75 9.3335V18.8335H17.25V9.3335H7.75Z" fill="#D12B1F"/>
            <rect x="0.5" y="0.5" width="24" height="24" rx="2.5" stroke="#D12B1F"/>
        </svg>
        <div className={'lala'} onClick={clickHandler}>Click me</div>

    </div>
}
