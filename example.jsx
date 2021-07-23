const clickHandler = () => {
    alert('click')
}

window.template = function () {
    return <MyComp>
        {1 + 1}
        <div className={'lala'} onClick={clickHandler} />
    </MyComp>
}
