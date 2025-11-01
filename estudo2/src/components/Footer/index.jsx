import './style.css'

export default function Footer() {
    return (

        <footer>
            <div className='info'>
            <p>
                &copy; {new Date().getFullYear()}
                <br/>
                <strong>
                SENAI DENDEZEIROS
                </strong>
            </p>
            </div>

        </footer>

    )

}