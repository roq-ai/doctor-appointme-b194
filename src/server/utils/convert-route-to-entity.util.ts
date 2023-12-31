const mapping: Record<string, string> = {
  appointments: 'appointment',
  doctors: 'doctor',
  patients: 'patient',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
