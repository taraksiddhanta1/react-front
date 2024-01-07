export default function Mobile() {
    return (
        <div>
            <label for="phone">Enter a mobile number:</label><br /><br />
            <input type="mobile" id="phone" name="phone" placeholder="+91 00000 00000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required /><br /><br />
            <br /><br />
            <input type="submit" />
        </div>
    )
}