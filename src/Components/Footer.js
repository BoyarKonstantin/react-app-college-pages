import React, { Component } from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

export default class Footer extends Component {
    render() {
        return (
            <>
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{
         backgroundColor: '#f8f9fa', 
         marginTop: '0.5%' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://t.me/koreechdhs'>
          Boiar Kostiatyn
        </a>
      </div>
    </MDBFooter>
            </>
        )
    }
}