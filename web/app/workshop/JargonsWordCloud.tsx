export function JargonsWordCloud() {
    return (
        <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
            {/* Outer border box — thin single purple border, slightly rounded */}
            <div
                className="absolute inset-0 rounded-2xl"
                style={{
                    border: '1.5px solid #7c3aed',
                    background: 'rgba(15, 10, 35, 0.6)',
                    overflow: 'hidden',
                }}
            >
                {/* Word cloud: absolutely positioned words matching the reference */}
                <div className="relative w-full h-full select-none">

                    {/* Row 1 — top area */}
                    <span className="absolute" style={{ top: '11%', left: '9%', fontSize: '1.25rem', fontWeight: 600, color: '#a78bfa' }}>Term Sheet</span>
                    <span className="absolute" style={{ top: '11%', left: '37%', fontSize: '1rem', fontWeight: 400, color: '#c084fc' }}>Pre-money</span>
                    <span className="absolute" style={{ top: '10%', left: '55%', fontSize: '2.4rem', fontWeight: 800, color: '#8b5cf6' }}>Cap Table</span>

                    {/* Row 2 */}
                    <span className="absolute" style={{ top: '24%', left: '4%', fontSize: '1rem', fontWeight: 400, color: '#a78bfa' }}>Dilution</span>
                    <span className="absolute" style={{ top: '22%', left: '37%', fontSize: '0.85rem', fontWeight: 400, color: '#c084fc' }}>Pro-rata Rights</span>
                    <span className="absolute" style={{ top: '22%', left: '70%', fontSize: '0.85rem', fontWeight: 400, color: '#c084fc' }}>Anti-dilution</span>

                    {/* Row 3 — big center */}
                    <span className="absolute" style={{ top: '36%', left: '13%', fontSize: '1.9rem', fontWeight: 700, color: '#8b5cf6' }}>SHA</span>
                    <span className="absolute" style={{ top: '35%', left: '26%', fontSize: '1.8rem', fontWeight: 700, color: '#d946ef' }}>Convertible Note</span>
                    <span className="absolute" style={{ top: '35%', left: '73%', fontSize: '1.25rem', fontWeight: 700, color: '#a78bfa' }}>NDA</span>

                    {/* Row 4 */}
                    <span className="absolute" style={{ top: '50%', left: '30%', fontSize: '1.4rem', fontWeight: 600, color: '#c084fc' }}>Valuation</span>

                    {/* Row 5 */}
                    <span className="absolute" style={{ top: '58%', left: '18%', fontSize: '0.9rem', fontWeight: 400, color: '#a78bfa' }}>Valuation</span>
                    <span className="absolute" style={{ top: '57%', left: '60%', fontSize: '1.1rem', fontWeight: 700, color: '#d946ef' }}>ESOP</span>

                    {/* Row 6 — Liquidation big */}
                    <span className="absolute" style={{ top: '70%', left: '6%', fontSize: '1.85rem', fontWeight: 800, color: '#d946ef' }}>Liquidation Pref</span>

                    {/* Row 7 — bottom */}
                    <span className="absolute" style={{ top: '83%', left: '6%', fontSize: '0.8rem', fontWeight: 600, color: '#a78bfa' }}>SHA</span>
                    <span className="absolute" style={{ top: '82%', left: '20%', fontSize: '0.95rem', fontWeight: 400, color: '#c084fc' }}>Vesting Cliff</span>
                    <span className="absolute" style={{ top: '82%', left: '55%', fontSize: '0.95rem', fontWeight: 400, color: '#8b5cf6' }}>Vesting Cliff</span>

                </div>
            </div>
        </div>
    );
}
