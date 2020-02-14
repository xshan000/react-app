import React from 'react'
import Layout from '../layout/Layout'
import Card from '../card/Card'

export default function Landing(props) {
    return (
        <div>
            <Layout>
                <Card {...props}/>
            </Layout>            
        </div>
    )
}
