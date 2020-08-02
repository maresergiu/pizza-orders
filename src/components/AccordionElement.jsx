import React from 'react'
import PropTypes from "prop-types"

const AccordionElement = ({ data }) => {
    AccordionElement.propTypes = {
        data: PropTypes.array.isRequired,
        activeAccordion: PropTypes.number.isRequired
    }

    return (
        <p>Name: {data.name}</p>
    );
}

export default AccordionElement;