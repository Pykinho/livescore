function GoalEvents({ data }) {
  return (
    <div>
      {data
        ? data.map((event) => (
            <div
              className="p-1 mt-2 bg-base-100 mx-10 text-sm"
              key={event.team.id}
            >
              <div className="flex justify-center">
                {event.player.name} {event.time.elapsed}'
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
export default GoalEvents;
