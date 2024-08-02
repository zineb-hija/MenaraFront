import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './TaskCard.css';

const TaskCard = ({ task, changeTaskColor }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  const colors = ['blue', 'red', 'green', 'lightgreen', 'yellow', 'orange'];

  return (
    <div ref={drag} className={`task-card ${task.color}`} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="task-content">
        <span>{task.title}</span>
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => setColorPickerOpen(!isColorPickerOpen)}
          className="edit-icon"
        />
      </div>
      {isColorPickerOpen && (
        <div className="color-picker">
          {colors.map(color => (
            <div
              key={color}
              className={`color-swatch ${color}`}
              onClick={() => {
                changeTaskColor(task.id, color);
                setColorPickerOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
