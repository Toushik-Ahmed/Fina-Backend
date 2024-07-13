'use client';
// Accounts.tsx

import { useState } from 'react';
import { IoIosRefresh } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';
import { CardWithForm } from '../addCard/CardWithForm';
import { Button } from '../ui/button';

type Props = {};

function Accounts({}: Props) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
  };

  return (
    <div>
      <div className="flex justify-end gap-2">
        {!showForm && (
          <Button
            onClick={toggleForm}
            variant="outline"
            className="flex text-white hover:text-white gap-2 bg-green-500 hover:bg-green-600"
          >
            <IoAdd className="h-4 w-4" /> Add Account
          </Button>
        )}
        <Button
          variant="outline"
          size="icon"
          className="text-green-500 border-green-500 hover:text-green-500"
        >
          <IoIosRefresh className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-5 flex flex-col items-center">
        <div className="text-center mb-4">
          All your accounts information here
        </div>
        <div>{showForm && <CardWithForm onClose={handleCloseForm} />}</div>
      </div>
    </div>
  );
}

export default Accounts;
