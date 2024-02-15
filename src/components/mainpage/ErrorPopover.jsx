import { Popover } from 'flowbite';

export default function ErrorPopover({errorMessage}){
    return (
        <Popover 
          show={errorMessage !== '' ? true : false}
          content={
            <div className="w-64 text-md text-gray-500 border-2 border-red-600">
              <div className=" bg-red-400 px-3 py-2">
                <h3 className="font-semibold text-gray-900">{errorMessage}</h3>
              </div>
            </div>
          }
        >
          <span></span>
        </Popover>
        
    )
}