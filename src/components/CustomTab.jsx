import React from 'react'

const CustomTab = ({ children, tabId, activeTab, ...props }) => {
    return (<>
        {tabId === activeTab &&
            <div {...props}>{children}</div>
        }
    </>
    )
}

export default CustomTab