export default function Color() {
    return (
        <div>
            <label for="favcolor">Select your favorite color:</label>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000" />
            <br />
            <input type="submit" />
        </div>
    )
}