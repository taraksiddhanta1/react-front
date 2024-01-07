export default function NavBar() {
    const a_style = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none'
    }
    return (

        <div>
            <ul style={
                {
                    listStyleType: 'none',
                    margin: 0,
                    padding: 0,
                    overflow: hidden,
                    backgroundColor: '#333'
                }}>


                <li style={{ float: 'left' }}>
                    <a style={{ a_style }} class="active" href="#home">Home</a>
                </li>
                <li style={{ float: 'left' }}>
                    <a style={{ a_style }} href="#about">About</a>
                </li>
                <li style={{ float: 'left' }}>
                    <a style={{ a_style }} href="#contact">Contact</a>
                </li>
                <li style={{ float: 'left' }}>
                    <a style={{ a_style }} href="#service">Service</a>
                </li>
                <li style={{ float: 'left' }}>
                    <a style={{ a_style }} href="#login">Login</a>
                </li>
            </ul>

        </div>
    )
}