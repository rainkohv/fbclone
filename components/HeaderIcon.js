function HeaderIcon({ Icon, active }) {
  return (
    <div
      className={`flex items-center cursor-pointer md:px-4 sm:h-12 md:hover:bg-gray-100 rounded-xl md:active:bg-gray-200 group`}
    >
      <Icon
        className={`h-5 text-gray-500 text-center sm:7 mx-auto md:px-10 group-hover:text-blue-500 ${
          active && "text-blue-500 "
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
