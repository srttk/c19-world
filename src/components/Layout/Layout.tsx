import React from 'react';
import { Page, Text } from '@zeit-ui/react'

const Layout = ({ children }) => {
    return (
        <Page>
            <Page.Header>
            <h1>Covid-19</h1>
            </Page.Header>
            <Page.Content>
                {children}
            </Page.Content>
            <Page.Footer>
                <Text type="secondary">
                    Sarath
                </Text>
            </Page.Footer>
        </Page>
    );
}

export default Layout;
