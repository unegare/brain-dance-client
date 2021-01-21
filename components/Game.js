import Game from '../src/game';
import { useState, useEffect } from 'react';
import ButtonsPanel from './panels/ButtonsPanel';
import ClassesPanel from './panels/ClassesPanel';
import NotificationPanel from './panels/NotificationPanel';

const GameComponent = () => {
  const [notes, setNotes] = useState([]);
  const notificationAlert = (note) => {
    setNotes((notes) => {
      return [...notes, note];
    });
  };

  useEffect(() => {
    const game = new Game({
      stageEl: $('#gameBox'),
      settings: { notificationAlert },
    });
    game.init();
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <ClassesPanel />
      <div className="col p0">
        <div className="gameFieldWrapper">
          <div id="gameBox" className="ui-widget-content" />
        </div>

        <ButtonsPanel />
        <NotificationPanel notes={notes} />

        <div className="quotes-panel" />

        {/* <div id="minimap"></div> */}
      </div>
    </div>
  );
};

export default GameComponent;
