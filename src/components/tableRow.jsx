export default function CustomTableRow({year, investmentValue, interest, 
    totalInterest, investedCapital}){
    return(
        <tr>
            <td>{year}</td>
            <td>{investmentValue}</td>
            <td>{interest}</td>
            <td>{totalInterest}</td>
            <td>{investedCapital}</td>

          </tr>
    )
}