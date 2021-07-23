const clickHandler = function() {
    alert('click')
}

window.template = function () {
    return <div>
        <div className={'lala'} onclick={clickHandler}>Click me</div>
    </div>
}
