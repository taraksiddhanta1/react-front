export default function Table() {
    return (
        <div>
            <table width={700}>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Stream</th>
                    <th>Course</th>
                </tr>
                <tr>
                    <td>Tarak</td>
                    <td>01</td>
                    <td>CS</td>
                    <td>MCA</td>
                </tr>
                <tr>
                    <td>Anik</td>
                    <td>02</td>
                    <td>Civil</td>
                    <td>B.Tech</td>
                </tr>
                <tr>
                    <td>Babu</td>
                    <td>03</td>
                    <td>Mechanical</td>
                    <td>Diploma</td>
                </tr>
            </table>
        </div>
    )
}