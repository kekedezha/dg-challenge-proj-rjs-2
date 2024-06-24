import PropTypes from 'prop-types';

const ListData = ({ data }) => {
    
    return( 
        <ul style={{marginTop: '10rem', padding: '0 5rem'}}>
            {data.map((item,index) => (
                <li key={index} style={{marginBottom: '1rem'}}>
                    {JSON.stringify(item)}
                </li>
            ))}
        </ul>
    )
}

ListData.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ListData;