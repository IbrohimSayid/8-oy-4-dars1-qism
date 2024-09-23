import React from 'react';

interface FormProps {
  nextStep: () => void;
}

const Form: React.FC<FormProps> = ({ nextStep }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" placeholder="First name" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="pt-6">
          <input type="text" placeholder="Last name" className="p-2 w-full border rounded" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" placeholder="Your email" className="mt-1 p-2 w-full border rounded" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input type="text" placeholder="Address line 1" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="pt-6">
          <input type="text" placeholder="Address line 2" className="p-2 w-full border rounded" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input type="text" placeholder="City" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div>
          <input type="text" placeholder="Zip" className="mt-1 p-2 w-full border rounded" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input type="tel" placeholder="+1 (555) 000-0000" className="mt-1 p-2 w-full border rounded" />
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Continue →
      </button>
    </form>
  );
};

export default Form;
