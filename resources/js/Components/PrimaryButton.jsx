import PropTypes from "prop-types"; 

Button.PropTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline"
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node

};

export default function Button({ 
    className = '', 
    disabled, 
    children, 
    processing,
    variant = "primary", //menambahkan variant (untuk memberikan class dari (kita))
    ...props
     }) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] w-full  text-center ${processing && "opacity-30"} btn-${variant} ${className} `} 
            //maksud dari ${processing && "opacity-30"}: kalau button sedang proses opacity nya 30 atau (seperti) disable 
            //btn-${variant} ${className}: implementasikan variant dengan memberi prefix button agar tidak tabrakan dengan yang lain desain yang lain  
            disabled={disabled}
        >
            {children}
        </button>
    );
}
