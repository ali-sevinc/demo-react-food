function Input({ id, label, input }) {
  return (
    <div className="mb-2 flex items-center justify-center ">
      <label htmlFor={id} className="mr-4 font-bold ">
        {label}
      </label>
      <input
        id={id}
        {...input}
        className="w-12 rounded-md border border-[#ccc] pl-2 "
      />
    </div>
  );
}

export default Input;
