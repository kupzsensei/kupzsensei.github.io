import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center space-y-6">
        <div className="font-display text-8xl font-bold text-cyan/20 md:text-[12rem]">
          404
        </div>
        <div className="font-mono text-sm text-muted">
          <span className="text-red-500">[ERROR]</span> SECTOR NOT FOUND
        </div>
        <p className="font-mono text-xs text-muted/60 max-w-md mx-auto">
          The requested resource could not be located in any known data partition.
          This node may have been decommissioned or relocated.
        </p>
        <div className="font-mono text-xs text-green">
          &gt; Recommended action: return to main interface
        </div>
        <Link
          href="/"
          className="inline-block border border-cyan px-6 py-3 font-mono text-xs tracking-widest text-cyan uppercase transition-all hover:bg-cyan/10 hover:shadow-[0_0_20px_#00FFFF40]"
        >
          [ RETURN HOME ]
        </Link>
      </div>
    </div>
  );
}
