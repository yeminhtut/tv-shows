import React, { PureComponent } from 'react'

class ErrorNotFound extends PureComponent {
    render() {
        return (
            <section className='not-found'>
                <div>
                    <h1>404 - Page Not Found</h1>
                    <div>The page you are looking for cannot be found.</div>
                </div>
            </section>
        )
    }
}

export default ErrorNotFound
