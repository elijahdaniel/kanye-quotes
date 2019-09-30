import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Quote, Btn } from '../styles/index'
import { getQuote } from '../store/actions'

const Quotes = ({ getQuote, quote, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getQuote()
  }, [getQuote])

  if (isFetching) {
    return (
      <center>
        <img
          style={{ width: '100px' }}
          src='https://mistyharborboats.com/wp-content/plugins/mhb-wizard/js-app/images/ajax-loader.gif'
        />
      </center>
    )
  }

  return (
    <div style={Container}>
      <h2 style={Quote}>"{quote}"</h2>
      <button style={Btn} className='btn' onClick={getQuote}>
        Get new quote
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { getQuote }
)(Quotes)
