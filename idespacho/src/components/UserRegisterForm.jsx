import React, { useState } from 'react';
import './UserRegisterForm.css';

const UserRegisterForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="register-form-container">
      <div className="form">
        <h2>Registro de usuario</h2>
        <label className="inline-label-input">
          Nombre
          <input type="text" />
        </label>

        <label className="inline-label-input">
          Apellidos
          <input type="text" />
        </label>

        <label>
          Fecha de nacimiento
          <div className="birthdate-container">
            <input type="number" min="1" max="31" placeholder="Día" className="inputFecha" />
            <input type="number" min="1" max="12" placeholder="Mes" className="inputFecha" />
            <input type="number" min="1950" max="2006" placeholder="Año" className="inputFecha" />
          </div>
        </label>

        <label className="inline-label-input">
          Curp
          <input type="text" />
        </label>

        <label>
          Sexo
          <div className="gender-container">
            <label>
              <input type="radio" name="gender" value="Femenino" /> Femenino
            </label>
            <label>
              <input type="radio" name="gender" value="Masculino" /> Masculino
            </label>
          </div>
        </label>
      </div>

      <div className="photo-upload-container">
        <div className="photo-preview">
          {file ? <img src={file} alt="Preview" /> : <span>Sube una foto tuya</span>}
        </div>
        <input type="file" onChange={handleFileChange} />
        <button>Subir foto</button>
      </div>
    </div>
  );
};

export default UserRegisterForm;
