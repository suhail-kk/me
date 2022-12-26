export const Button = ({type, icon, text, onClick }) => {
  return (
    <button
      className="flex flex-1 bg-transparent cursor-pointer items-center justify-between border-4 border-gray-normal rounded-full w-fit"
      onClick={onClick}
      type={type}
    >
      <p className="uppercase text-base font-medium text-white ml-4 h-full w-full mr-2">
        {text}
      </p>
      <div className="w-fit h-full p-3 pulse rounded-full flex justify-center items-center bg-primaryYellow">
        {icon}
      </div>
    </button>
  );
};

export const InputField = ({ id, value,name, placeholder, type, onChange }) => (
  <input
    id={id}
    type={type}
    value={value}
    name={name}
    className="bg-transparent  border-[1px] border-gray-medium shadow-lg  px-3 py-2 flex w-full justify-start items-center text-base md:text-lg  font-medium text-white placeholder:text-white focus:outline-none rounded-full"
    placeholder={placeholder}
    onChange={onChange}
  />
);

export const TextArea = ({ value,name, placeholder, onChange }) => (
  <textarea
    value={value}
    className="bg-transparent border-[1px] border-gray-medium shadow-lg px-3 text-base md:text-lg py-2 h-40 flex w-full justify-start items-center text-white placeholder:text-white focus:outline-none rounded-2xl"
    placeholder={placeholder}
    onChange={onChange}
    name={name}
  />
);

export const ButtonReadMore = ({ onClick }) => {
  return (
    <button
      type="submit"
      className="bg-primaryYellow w-fit px-2 py-1 text-black shadow-lg rounded-full"
      onClick={onClick}
    >
      Read more
    </button>
  );
};
