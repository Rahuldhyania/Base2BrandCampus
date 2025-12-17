import React from 'react';
import ContactusBanner from '../Components/Page-Components/ContactusBanner';

export const metadata = {
    title : ''
}
const page = () => {
    return (
        <div>
            <ContactusBanner />
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.6488903132645!2d76.69220059999999!3d30.711305399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef709990df93%3A0xb9ae31b247ff7455!2sB2B%20Campus!5e1!3m2!1sen!2sin!4v1765804894499!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}   
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    )
}

export default page
