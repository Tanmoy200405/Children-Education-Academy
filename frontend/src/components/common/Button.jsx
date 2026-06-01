export default function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  iconLeft,
  iconRight,
  loading,
  disabled,
  fullWidth,
  onClick,
  className = "",
  ...props 
}) {
  const baseClasses = "group relative overflow-hidden inline-flex items-center justify-center font-bold transition-all duration-300 ease-out z-10";
  
  const sizeClasses = {
    sm: "h-[40px] px-6 text-sm rounded-full",
    md: "h-[56px] px-8 text-base rounded-full",
    lg: "h-[64px] px-10 text-lg rounded-full"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#06B6D4] to-[#14B8A6] text-white shadow-[0_4px_14px_rgba(20,184,166,0.25)] hover:shadow-[0_10px_30px_rgba(20,184,166,0.4)] hover:-translate-y-[2px] hover:scale-[1.03]",
    secondary: "bg-transparent border-2 border-[#14B8A6] text-[#003F46] hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-[#06B6D4] hover:to-[#14B8A6] hover:shadow-[0_10px_30px_rgba(20,184,166,0.35)] animate-pulse-border hover:-translate-y-[2px] hover:scale-[1.03]",
    outline: "bg-transparent border-2 border-[#1FC7D4] text-[#1FC7D4] hover:bg-[#1FC7D4] hover:text-white hover:-translate-y-[2px] hover:scale-[1.03]"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled || loading ? "opacity-60 cursor-not-allowed pointer-events-none" : "";

  return (
    <button 
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`} 
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && iconLeft && <span className="mr-2">{iconLeft}</span>}
      <span className="relative z-10 flex items-center">{children}</span>
      {!loading && iconRight && <span className="ml-2">{iconRight}</span>}
      
      {/* Shimmer Effect inside secondary button */}
      {variant === 'secondary' && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-10 w-[40%] h-full animate-shimmer" />
        </div>
      )}
    </button>
  );
}
