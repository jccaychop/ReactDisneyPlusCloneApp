import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles/myTabs.css';
import DetailContainer from './detail';
import SeasonContainer from './season';

const TabContainer = ({ dataUsed, mediaTYPE, langSelected }) => {

    const [select, setSelect] = useState({
        key: "",
        value: false,
    });

    const onSelect = (key) => {
        setSelect({
            key: key,
            value: true,
        });
    }

    return (
        <Tabs>
            <TabList>
                {(mediaTYPE === "series") && (<Tab>EPISODIOS</Tab>)}
                <Tab>SUGERENCIAS</Tab>
                <Tab>EXTRAS</Tab>
                <Tab>DETALLES</Tab>
            </TabList>

            {/* EPISODES */}
            {
                (mediaTYPE === "series") && (
                    <TabPanel>
                        <Tabs className="my_react-tabs">
                            <TabList className="my_react-tabs__tab-list">
                                {
                                    dataUsed.episodeList.map(element => {
                                        return (
                                            <Tab
                                                key={element['_id']}
                                                className={`my_react-tabs__tab ${select.key === element['_id'] && 'my_react-tabs__tab--selected'}`}
                                                onClick={() => onSelect(element['_id'])}
                                            >
                                                {element.name}
                                            </Tab>
                                        )
                                    })
                                }
                            </TabList>

                            {
                                dataUsed.episodeList.map(element => {
                                    return (
                                        <TabPanel className="my_react-tabs__tab-panel" key={element['_id']}>
                                            <SeasonContainer
                                                episodes={element.episodes}
                                                langSelected={langSelected}
                                            />
                                        </TabPanel>
                                    )
                                })
                            }
                        </Tabs>
                    </TabPanel>
                )
            }

            {/* SUGGESTIONS */}
            <TabPanel>
                <p>
                    <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                        Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                    released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                    as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                    appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                </p>
            </TabPanel>

            {/* EXTRAS */}
            <TabPanel>
                <p>
                    <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                    is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                    Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                    attack by Bowser. She often plays the damsel in distress role within the series and
                    is the lead female. She is often portrayed as Mario's love interest and has appeared
                    in Super Princess Peach, where she is the main playable character.
                </p>
            </TabPanel>

            {/* DETAILS */}
            <TabPanel>
                <DetailContainer dataUsed={dataUsed} mediaTYPE={mediaTYPE} langSelected={langSelected} />
            </TabPanel>
        </Tabs>
    )
}

export default TabContainer;
