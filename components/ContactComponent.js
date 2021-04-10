import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render () {
        return (
            <ScrollView >
                <Card 
                    wrapperStyle={{margin: 20}}
                    title="Contact Information">
                    <Text 
                        style={{marginBottom: 10}}>
                            1 Nucamp Way {'\n'}
                            Seattle, WA 98001 {'\n'}
                            U.S.A.
                    </Text>
                    <Text>Phone: 1-205-555-1234</Text>
                    <Text>Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;