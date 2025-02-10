import React from 'react'

export const ClassShowCase = ({ classes }) => {
    return (
        <div className='p-4'>
            {console.log(classes.stats)}
            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">{classes.name}</h2>
                <img
                    src={classes.image}
                    alt={classes.name}
                    className="w-full h-64 object-cover rounded-lg mb-4 border border-gray-700"
                />
                {/*<p className="text-gray-300 mb-4">{classes.description}</p> */}
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold text-yellow-400">Stats</h3>
                    <ul className="list-disc list-inside text-gray-400">
                    <ul>
                        <li><strong>Level:  </strong>{classes.stats.level}</li>
                        <li><strong>Dexterity:  </strong>{classes.stats.dexterity}</li>
                        <li><strong>Strength:  </strong>{classes.stats.strength}</li>
                        <li><strong>Vigor:  </strong>{classes.stats.vigor}</li>
                        <li><strong>Endurance:  </strong>{classes.stats.endurance}</li>
                        <li><strong>Faith:  </strong>{classes.stats.faith}</li>
                        <li><strong>Intelligence:  </strong>{classes.stats.intelligence}</li>
                        <li><strong>Mind:  </strong>{classes.stats.mind}</li>
                        <li><strong>Arcane:  </strong>{classes.stats.arcane}</li>
                    </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}
