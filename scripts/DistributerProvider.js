let distributers = []

export const useDistributers = () => distributers.slice()

export const getDistributers = () => fetch("http://localhost:8088/distributors")
    .then(res => res.json())
    .then(parsedDistributers => distributers = parsedDistributers)