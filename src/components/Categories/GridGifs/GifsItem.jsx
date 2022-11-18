import PropTypes from 'prop-types'
export const GifsItem = ({title,url,id}) => {

    // console.log(title,url,id);

    return (
        <>
            <div className="card">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </>
    )
}

GifsItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    
}
