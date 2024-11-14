import React, { useState } from 'react'
import Button from './Button';
import CustomTab from './CustomTab';

const Numero10 = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [itens] = useState([
        { name: "Tab 1", id: 1 },
        { name: "Tab 2", id: 2 },
        { name: "Tab 3", id: 3 },
    ])

    return (
        <div>
            <div className="d-flex flex-row justify-content-evenly mw-50 mx-auto">
                {itens.map(item => (
                    <Button onClick={() => setActiveTab(item.id)} style={{ border: "none", backgroundColor: (item.id === activeTab ? "lightgreen" : "green") }}>{item.name}</Button>
                ))}
            </div>
            <div style={{ marginTop: "15px" }}>
                <CustomTab tabId={1} activeTab={activeTab}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ultrices nunc. Vestibulum sit amet
                        massa sit amet lacus vulputate sagittis. Sed convallis ligula vel nibh porttitor,
                        elementum placerat eros auctor. Pellentesque a commodo odio. Ut tincidunt finibus justo ut interdum.
                        Mauris vitae placerat nulla, vitae vestibulum neque. Proin ut lorem malesuada, mattis dolor vitae, facilisis est.
                    </p>
                </CustomTab>
                <CustomTab tabId={2} activeTab={activeTab}>
                    <p>
                        Morbi sem enim, mattis quis sem vel, tempus maximus massa. Nulla lacinia velit in dui euismod consectetur.
                        In hac habitasse platea dictumst. Vestibulum id tellus suscipit, vulputate purus nec,
                        vulputate mauris. Proin sagittis tempor lectus, eu dignissim magna auctor a. Praesent volutpat lorem sem,
                        sit amet congue quam convallis a. Aliquam rhoncus diam eu risus sagittis interdum. Ut faucibus diam ut purus vestibulum vestibulum.
                        Etiam eget ipsum fringilla mi feugiat placerat et ultrices enim.
                    </p>
                </CustomTab>
                <CustomTab tabId={3} activeTab={activeTab}>
                    <p>
                        Curabitur molestie egestas commodo. Morbi mollis nisl urna, ac finibus mi eleifend non.
                        Phasellus pretium ornare ante, vitae accumsan urna ornare et. Nulla facilisi. Maecenas urna felis, ultricies vitae leo tincidunt,
                        aliquam sodales urna. Nullam ut volutpat lectus. Nulla rhoncus fermentum pulvinar. Sed at ipsum sit amet metus accumsan pharetra vel et velit.
                        Donec pulvinar facilisis elit maximus feugiat.
                    </p>
                </CustomTab>
            </div>

        </div>
    )
}

export default Numero10